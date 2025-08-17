const express = require('express');
const router = express.Router();

// Dummy database (in-memory)
let patients = [
  { id: 1, name: "Ali", age: 30, condition: "Stable" },
  { id: 2, name: "Siti", age: 25, condition: "Critical" }
];

// ✅ GET all patients
router.get('/', (req, res) => {
  res.json(patients);
});

// ✅ GET patient by ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const patient = patients.find(p => p.id === id);
  if (!patient) return res.status(404).json({ message: "Patient not found" });
  res.json(patient);
});

// ✅ POST add patient
router.post('/', (req, res) => {
  const newPatient = req.body;
  patients.push(newPatient);
  res.status(201).json(newPatient);
});

// ✅ PUT update patient
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = patients.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ message: "Patient not found" });

  patients[index] = { ...patients[index], ...req.body };
  res.json(patients[index]);
});

// ✅ DELETE remove patient
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = patients.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ message: "Patient not found" });

  patients.splice(index, 1);
  res.json({ message: "Patient deleted" });
});

module.exports = router;
