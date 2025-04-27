from flask_sqlalchemy import SQLAlchemy 

db = SQLAlchemy()

class Student(db.Model):
    __tablename__ = 'students'
    student_id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(80), nullable=False)
    last_name = db.Column(db.String(80), nullable=False)
    gender  = db.Column(db.Boolean, nullable=False)
    department = db.Column(db.String(90), nullable=False)


    def to_dict(self):
        return {
            'student_id': self.student_id,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'gender': self.gender, 
            'department': self.department
        }