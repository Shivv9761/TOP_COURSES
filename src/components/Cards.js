import React from 'react'
import Card from './Card'
import { useState } from 'react';

const Cards = ({courses,category}) => {

    const [likedCourses, setLikeCourse]=useState([]);

    let allCourses=[];

    function getCourses() {
        if(category==="All"){
            console.log("printing coursres")
            console.log(courses)
            Object.values(courses).forEach(array=>{
              array.forEach((courseData)=>{
                allCourses.push(courseData)
              })
            })
          return allCourses;

        }
        else{
            console.log("heyyyy")
            console.log(courses[category])
          return courses[category]
        }
    }


    // getCourses();
    // console.log(allCourseData)
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4" >
    {

      getCourses().map((course)=>{
          return <Card course={course} setLikeCourse={setLikeCourse} likedCourses={likedCourses}></Card>
      })
    }
    </div>
  )
}

export default Cards