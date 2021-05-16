// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Mcq{
    struct Teacher{
        address id;
        string password;
    }
    
    Teacher public teacher;
    
    constructor(string memory _password){
        teacher.id=msg.sender;
        teacher.password=_password;
    }
    
    uint _num;
    
    struct Student{
        address id;
        uint rollno;
        string name;
        string course;
        uint mark;
        uint num;
    }
    
    mapping(uint=>Student) public student; // contain list of students
    
    // find teacher or not
    modifier isTeacher() {
        require(teacher.id==msg.sender,"Only teacher is able to enrollStudent");
        _;
    }
    
    // student enroll
    function enrollStudent(address _id,uint _rollno,string memory _name,string memory _course) public isTeacher{
        require(student[_rollno].rollno != _rollno,"Already enrolled this student");
        student[_rollno].rollno=_rollno;
        student[_rollno].id=_id;
        student[_rollno].name=_name;
        student[_rollno].course=_course;
        _num++;
        student[_rollno].num=_num;
        
    }
    
    // Login for teacher
    function teacherLogin(string memory _password)public view returns(bool){
        if(keccak256(bytes(teacher.password))==keccak256(bytes(_password))){
            return true;
        }
        else{
            return false;
        }
    }
    
}