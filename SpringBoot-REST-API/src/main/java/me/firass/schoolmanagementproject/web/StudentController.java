package me.firass.schoolmanagementproject.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import me.firass.schoolmanagementproject.models.Student;
import me.firass.schoolmanagementproject.repositories.StudentRepository;

@RestController
public class StudentController {
    @Autowired
    private StudentRepository studentRepository;
    Student stu = new Student();


    @CrossOrigin(origins = "*")
    @PostMapping("/create")
    public void createStudent(@RequestBody Student student){
        studentRepository.insert(student);
    }
    

    @CrossOrigin(origins = "*")
    @PostMapping("/delete/{id}")
    public void deleteStudent(@PathVariable String id){
        studentRepository.deleteById(id);
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/list")
    public List<Student> listStudent(){
        return studentRepository.findAll();
    }
    
    @CrossOrigin(origins = "*")
    @PutMapping("/updateStudent/{id}")
	public ResponseEntity<Student> updateStudent(@PathVariable String id, @RequestBody Student student) {
		if(studentRepository.existsById(id)) {
			stu = studentRepository.findById(id).get();
			//Address ad = bal.getAddress();
			
			stu.setFirstName(student.getFirstName());
			stu.setCls(student.getCls());
			studentRepository.save(student);
			return new ResponseEntity<>(student,HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
    
    
 
}
