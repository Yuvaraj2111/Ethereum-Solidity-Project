// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Mcq{
    struct Teacher{
        address id;
        string password;
    }
    
    Teacher public teacher;
    string public examCode;
    
    constructor(string memory _password,string memory _code){
        teacher.id=msg.sender;
        teacher.password=_password;
        examCode=_code;
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
    
    // Login for teacher
    function teacherLogin(string memory _password)public view returns(bool){
        if(keccak256(bytes(teacher.password))==keccak256(bytes(_password))){
            return true;
        }
        else{
            return false;
        }
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
    
    // student Login
    function studentLogin(uint _no,string memory _code) public view returns(bool,string memory){
        if(student[_no].rollno==_no){
            if(keccak256(bytes(_code))==keccak256(bytes(examCode))){
                return (true,"Login Successfully");
            }else{
                return (false,"Incorrect examCode");
            }
        }else{
            return (false,"Rollno doesnot exist");
        }
    }
    
    // student marks entry
    function markEntry(uint _no,uint _mark)public {
        if(student[_no].rollno==_no){
            student[_no].mark=_mark;
        }
    }

}