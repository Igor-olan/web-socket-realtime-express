const express = require('express');
const bodyParser = require('body-parser');
const WebSocket = require('ws');
const http = require('http');
const clients = new Set();
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
const port = 3000;
const hostName = '127.0.0.1';
const authRoutes = require('./routes/authRoutes');
const studentRoutes = require('./routes/studentRoutes');

app.use('v1/auth', authRoutes(express));
app.use('v1/student', studentRoutes(express));

const { Sequelize } = require('sequelize');

app.get('/', async (req, res) => {
    try {
        await Sequelize.authenticate();
        res.send({
            message: "Home Page - Database connected successfully"
        });
    } catch (error) {
        res.status(500).send({
            message: "Unable to connect to the database",
            error: error.message
        });
    }
});

app.get('/student', async (req, res) => {
    try {
        const students = await db.student.findAll();
        res.status(200).json({
            message: "Students fetched successfully",
            data: students
        });
    } catch (error) {
        res.status(500).json({
            message: "Error fetching students",
            error: error.message
        });
    }
});

app.post('/addstudent', async (req, res) => {
    try {
        const { firstName, lastName, classes, gender, major_id } = req.body;
        const newStudent = await db.student.create({
            firstName,
            lastName,
            classes,
            gender,
            major_id
        });

        res.status(201).json({
            message: "Student added successfully",
            data: newStudent
        });
    } catch (error) {
        res.status(500).json({
            message: "Error adding student",
            error: error.message
        });
    }
});

app.delete('/student/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const student = await db.student.findByPk(id);
        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        await student.destroy();

        res.status(200).json({
            message: "Student deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting student",
            error: error.message
        });
    }
});

app.get('/student/:id', async (req, res) => {
    try {
        const student = await db.student.findByPk(req.params.id);

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.status(200).json({
            message: "Student details fetched successfully",
            data: student
        });
    } catch (error) {
        res.status(500).json({
            message: "Error fetching student details",
            error: error.message
        });
    }
});

app.put('/student/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { firstName, lastName, classes, gender, major_id } = req.body;

        const student = await db.student.findByPk(id);
        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        await student.update({
            firstName,
            lastName,
            classes,
            gender,
            major_id
        });

        res.status(200).json({
            message: "Student updated successfully",
            data: student
        });
    } catch (error) {
        res.status(500).json({
            message: "Error updating student",
            error: error.message
        });
    }
});

wss.on('connection', (ws) => {
    clients.add(ws);
    console.log('Klien terhubung');

    ws.send(JSON.stringify({
        type: 'connection',
        message: 'Terhubung ke server WebSocket'
    }));

    ws.on('message', (message) => {
        try {
            const parsedMessage = JSON.parse(message);
            console.log('Pesan yang diterima:', parsedMessage);

            const messageType = parsedMessage.type || 'chat';

            clients.forEach((client) => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify({
                        type: messageType,
                        data: parsedMessage.data || parsedMessage
                    }));
                }
            });
        } catch (error) {
            console.error('Error parsing pesan:', error);
        }
    });

    ws.on('close', () => {
        clients.delete(ws);
        console.log('Klien terputus');
    });
});

app.post('/send-notification', (req, res) => {
    const notification = req.body;

    clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({
                type: 'notification',
                data: notification
            }));
        }
    });

    res.status(200).json({ message: 'Notifikasi berhasil dikirim' });
});

server.listen(port, () => {
    console.log(`Server running at http://${hostName}:${port}`);
});
