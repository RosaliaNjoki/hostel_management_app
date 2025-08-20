from flask import Flask, request,jsonify
from flask_sqlalchemy import SQLAlchemy
from models import db, Student, Hostel, Room, Allocation 

app = Flask(__name__)

#configure the database (SQLite)

app.config['SQLALCHEMY_DATABASE_URI']= 'sqlite://hostel.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']= False

db.init_app(app)

with app.app_contex():
    db.create_all()

#student routes 
@app.route('/students', methods=['POST'])
def add_student():
    data=request.get_json()
    student = Student(
        first_name = data['first_name'], 
        last_name = data['last_name'], 
        gender = data['department']
    )   
    db.session.add(student)
    db.session.commit()
    return jsonify(student.to_dict()), 201

@app.route('/students', methods=['GET'])
def get_students():
    students= Student.query.all()
    return jsonify([s.to_dict() for s in students])

@app.route('/students/<int:id>', methods=['GET'])
def get_student(id):
    student=Student.query.get_or_404(id)
    return jsonify(student.to_dict())

@app.route('/students/<int:id>', methods=['PUT'])
def update_student(id):
    data = request.get_json()
    student = Student.query.get_or_404(id)
    student.first_name = data.get('first_name', student.first_name)
    student.last_name=data.get('last_name', student.last_name)  
    student.gender= data.get('gender', student.gender)
    student.department= data.get('department', student.deprtment)
    db.session.commit()
    return jsonify(stuent.to_dict())  

@app.route('/students/<int:id>', methods=['DELETE'])
def delete_student(id):
    student = Student.query.get_or_404(id)
    db.session.delete(student)
    db.session.commit()
    return jsonify({'message': 'Student deleted successfully'})    
            

#Hostel Routes
@app.route('/hotels', methods=['POST'])
def add_hostel():
    data = request.get_json()
    try:
        hostel = Hostel(
            hostel_name=data['hostel_name'],
            hostel_capacity=data['hostel_capacity']
        )
        db.session.add(hostel)
        db.session.commit()
        return jsonify(hostel.to_dict()), 201
    except ValueError as e:
        return jsonify({'error': str(e)}), 400

@app.route('/hostels', methods=['GET'])
def get_hostels():
    return jsonify([h.to_dict() for h in hostels])

#Room routes
@app.route('/rooms',methods=['POST'])
def add_room():
    data = request.get_json()
    try: 
        room= Room(
            room_number=data['room_number'],
            room_capacity=data['room_capacity'],
            hostel_id=data['hostel_id']
        )   
        db.session.add(room)
        db.session.commit()
        return jsonify(room.to.dict()), 201
    except ValueError as e: 
        return jsonify({'error': str(e)}), 400

@app.route('/rooms', methods=['GET'])
def get_rooms():
    rooms = Room.query.all()
    return jsonify([r.to-dict() for r in rooms])

#Allocation routes 
@app.route('/allocations', methods=['POST'])    
def allocate_room():
    data = request.get_json()
    allocation = Allocation(
        student_id= data['student_is'],
        hostel_id=data['hostel_id'],
        room_id=data['room_id']
    )
    db.session.add(allocation)
    db.session.commit()
    return jsonify(allocation.to_dict()), 201

@app.route('/allocations', methods=['GET'])
def get_allocations():
    allocations = Allocation.query.all()
    return jsonify([a.to_dict() for a in allocations]) 

    if __name__ == '__main__':
        app.run(debug=True)  

