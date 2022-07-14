// packages import
const express = require('express');
const router = new express.Router;

// Employee Model Import
const Employee = require("../models/Employee");
// Create Employee Data
router.post("/employees", async (req,res)=>{
    //console.log(req.body);
    try {
        const employee = new Employee(req.body);
        await employee.save();
        res.status(201).send(employee);
    } catch (error) {
        res.status(400).send(error);
    }
})

// Read All Employee Data
router.get("/employees", async (req,res)=>{
    try {
        const employee = await Employee.find();
        res.status(200).send(employee);
    } catch (error) {
        res.send(error);
    }
})

// Read Employee Data By Id
router.get("/employees/:id", async (req,res)=>{
    try {
        const employee = await Employee.findById(req.params.id);
        if(!employee){
            res.status(404).send();
        }else{
            res.status(200).send(employee);
        }
    } catch (error) {
        res.status(404).send(error);
    }
})

// Update Employee Data By Id
router.patch("/employees/:id", async (req,res) =>{
    try {
        const employee = await Employee.findByIdAndUpdate(req.params.id,req.body,{
            new: true
        });
        if(!employee){
            res.status(404).send();
        }else{
            res.status(200).send(employee);
        }
    } catch (error) {
        res.status(404).send(error);
    }
})

// Update Employee Data By Id
router.put("/employees/:id", async (req,res) =>{
    try {
        const employee = await Employee.findByIdAndUpdate(req.params.id,req.body,{
            new: true
        });
        if(!employee){
            res.status(404).send();
        }else{
            res.status(200).send(employee);
        }
    } catch (error) {
        res.status(404).send(error);
    }
})
// Delete Employee
router.delete("/employees/:id", async (req,res)=>{
    try {
        const employee = await Employee.findByIdAndDelete(req.params.id);
        if(!req.params.id){
            res.status(404).send();
        }else{
            res.status(200).send(employee);
        }
    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports = router;