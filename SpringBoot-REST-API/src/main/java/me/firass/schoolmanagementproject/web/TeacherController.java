package me.firass.schoolmanagementproject.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import me.firass.schoolmanagementproject.models.Teacher;
import me.firass.schoolmanagementproject.repositories.TeacherRepository;

@RestController
public class TeacherController {
    @Autowired
    private TeacherRepository teacherRepository;

       
    @CrossOrigin(origins = "*")
    @PostMapping("/signUp")
    public void signUp(@RequestBody Teacher teacher){
    	teacherRepository.insert(teacher);
    }
    
    @CrossOrigin(origins = "*")
    @GetMapping("/listTeachers")
    public List<Teacher> listTeachers(){
        return teacherRepository.findAll();
    }
    
 
}
