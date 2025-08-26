from flask_sqlalchemy import SQLAlchemy 
from sqlalchemy.orm import validates 

db = SQLAlchemy()

class Student(db.Model):
    __tablename__ = 'students'
    student_id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(80), nullable=False)
    last_name = db.Column(db.String(80), nullable=False)
    gender  = db.Column(db.String(10), nullable=False)
    department = db.Column(db.String(90), nullable=False)


    def to_dict(self):
        return {
            'student_id': self.student_id,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'gender': self.gender, 
            'department': self.department
        }

class Hostel(db.Model):
    __tablename__ = 'hostels'
    hostel_id = db.Column(db.Integer, primary_key = True)
    hostel_name = db.Column(db.String(100), nullable=False)
    hostel_capacity = db.Column(db.Integer, nullable=False)

    @validates('hostel_capacity')
    def validate_capacity(self, key, value):
        if value > 300:
            raise ValueError("Hostel capacity cannot exceed 300.")
        return value

    def to_dict(self):
        return {
            'hostel_id': self.hostel_id,
            'hostel_name': self.hostel_name,
            'hostel_capacity': self.hostel_capacity
        }        

class Room(db.Model):
    __tablename__ = 'rooms'
    room_id = db.Column(db.Integer, primary_key = True)
    room_number = db.Column(db.Integer, nullable = False)
    room_capacity = db.Column(db.Integer, nullable = False)
    
    hostel_id = db.Column(db.Integer, db.ForeignKey('hostels.hostel_id'))

    @validates('room_capacity')
    def validate_capacity(self, key, value):
        if value > 4:
            raise ValueError("Room capacity cannont exceed 4.")
        return value    

    def to_dict(self):
        return {
            'room_id': self.room_id,
            'room_number': self.room_number,
            'room_capacity': self.room_capacity,
            'hostel_id': self.hostel_id
        }

class Allocation(db.Model):
    __tablename__ = 'allocations'
    allocation_id = db.Column(db.Integer, primary_key = True)
    student_id = db.Column(db.Integer, db.ForeignKey('students.student_id'))
    hostel_id = db.Column(db.Integer, db.ForeignKey('hostels.hostel_id')) 
    room_id = db.Column(db.Integer, db.ForeignKey('rooms.room_id'))

    def to_dict(self): 
        return {
            'allocation_id': self.allocation_id,
            'student_id': self.student_id, 
            'hostel_id': self.hostel_id,
            'room_id': self.room_id

        }
        


