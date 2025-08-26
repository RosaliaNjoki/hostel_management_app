from app import app, db

from models import Student, Hostel, Room, Allocation


#run inside app context
with app.app_context():
    #drop all tables and recreate (optional, for fresh start)
    db.drop_all()
    db.create_all()

    #----add hostels-----
    hostel1 = Hostel(hostel_name = "Olive Hostel", hostel_capacity=120)
    hostel2 = Hostel(hostel_name = "Mahogany Hostel", hostel_capacity=110)
    hostel3 = Hostel(hostel_name = "Oak Hostel", hostel_capacity=90)
    hostel4 = Hostel(hostel_name = "Moringa Hostel", hostel_capacity=130)
    hostel5 = Hostel(hostel_name = "Maple Hostel", hostel_capacity=100)
    hostel6 = Hostel(hostel_name = "Cinder Hostel", hostel_capacity=120)

    db.session.add_all([hostel1, hostel2, hostel3, hostel4, hostel5, hostel6])
    db.session.commit()

    #-------add rooms------
    room1 = Room(room_number = 10, room_capacity=2, hostel_id = hostel1.hostel_id)
    room2 = Room(room_number = 15, room_capacity=3, hostel_id = hostel2.hostel_id)
    room3 = Room(room_number = 18, room_capacity=4, hostel_id = hostel3.hostel_id)
    room4 = Room(room_number = 20, room_capacity=3, hostel_id = hostel4.hostel_id)
    room5 = Room(room_number = 50, room_capacity=2, hostel_id = hostel5.hostel_id)
    room6 = Room(room_number = 60, room_capacity=2, hostel_id = hostel6.hostel_id)
    db.session.add_all([room1, room2, room3, room4, room5, room6])
    db.session.commit()

    #----- add students-----
    student1= Student(first_name="Jane", last_name="Kipkemoi", gender="Female", department="Sports")
    student2= Student(first_name="Peter", last_name="Odhiambo", gender="Male", department="IT")
    student3= Student(first_name="Loise", last_name="Kamau", gender="Female", department="CS")
    student4= Student(first_name="John", last_name="Kilonzo", gender="Male", department="EE")
    student5= Student(first_name="Robert", last_name="Mutta", gender="Male", department="IT")
    student6= Student(first_name="Vera", last_name="Bosibori", gender="Female", department="CS")
    db.session.add_all([student1, student2, student3, student4, student5, student6])

    db.session.commit()

    #---add allocations......
    alloc1=Allocation(student_id=student1.student_id, hostel_id = hostel1.hostel_id, room_id=room1.room_id)
    alloc2=Allocation(student_id=student2.student_id, hostel_id = hostel2.hostel_id, room_id=room2.room_id)
    alloc3=Allocation(student_id=student3.student_id, hostel_id = hostel3.hostel_id, room_id=room3.room_id)
    alloc4=Allocation(student_id=student4.student_id, hostel_id = hostel4.hostel_id, room_id=room4.room_id)
    alloc5=Allocation(student_id=student5.student_id, hostel_id = hostel5.hostel_id, room_id=room5.room_id)
    alloc6=Allocation(student_id=student6.student_id, hostel_id = hostel6.hostel_id, room_id=room6.room_id)

    db.session.add_all([alloc1, alloc2, alloc3, alloc4, alloc5, alloc6])

    db.session.commit()

    print('Database seeded successfully!')



