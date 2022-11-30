package me.firass.schoolmanagementproject.models;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Document(collection = "teacher")
@Data @NoArgsConstructor @AllArgsConstructor @ToString
public class Teacher {
	 private String fulltName;
	    private String email;
	    private String phone;
	    private String designation;
	    private String password;
		public String getFulltName() {
			return fulltName;
		}
		public void setFulltName(String fulltName) {
			this.fulltName = fulltName;
		}
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		public String getPhone() {
			return phone;
		}
		public void setPhone(String phone) {
			this.phone = phone;
		}
		public String getDesignation() {
			return designation;
		}
		public void setDesignation(String designation) {
			this.designation = designation;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
}
