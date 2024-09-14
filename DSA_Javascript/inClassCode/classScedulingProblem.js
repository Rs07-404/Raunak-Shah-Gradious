// 7 classes and optimize the room usage


class ArtClass{
    constructor(name, start, end){
        this.name = name;
        this.start = start;
        this.end = end;
    }
}

class ClassRoomSchedule{
    constructor(classes){
        this.classes = classes;
        this.schedule = [];
    }

    sortClasses(){
        this.classes.sort((a,b)=> a.end - b.end);
    }

    scheduleClasses(){
        //1. Sort based on end time
        //2. Pick a class that start after the first class
        //3. whose start time is greater than last class end time
        this.sortClasses();
        for(const aclass of this.classes){
            if(this.schedule.length === 0 || aclass.start >= this.schedule[this.schedule.length - 1].end){
                this.schedule.push(aclass);
            }
        }
        return this.schedule;
    }
}

const classes = [
    new ArtClass("Oil Painting",9,12),
    new ArtClass("Sculpture",10,13),
    new ArtClass("WaterColor",13,15),
    new ArtClass("Pottary",14,16),
    new ArtClass("Drawing",15,17),
    new ArtClass("Photography",16,18)
];

const schedule = new ClassRoomSchedule(classes);
console.log(schedule.scheduleClasses());