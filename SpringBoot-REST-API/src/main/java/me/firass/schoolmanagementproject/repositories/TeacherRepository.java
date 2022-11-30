package me.firass.schoolmanagementproject.repositories;

import me.firass.schoolmanagementproject.models.Teacher;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface TeacherRepository extends MongoRepository<Teacher, String> {

}
