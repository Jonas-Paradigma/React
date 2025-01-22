import React, { useEffect, useState } from 'react'
import Card from './Card'

export default function PeopleContainer() {
    const [people, setPeople] = useState ([]);
    const [filteredPeople, setFilteredPeople] = useState([]);

    useEffect(()=>{
        fetch("https://678a0adfdd587da7ac288c57.mockapi.io/api/person").then(
            (res) => res.json().then((data)=>{
                setPeople(data);
                setFilteredPeople(data);
            })
    );
    }, []);

    const filterPeople = (filter) =>{
        let filtered = people.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()));
        setfilteredPeople (filtered);
    }

  return (
    <div className="">
        
        <div className="fixed border mb-4 bg-white w-full h-28 p-8">
        <input className="border p-4" type="text" placeholder="Search" onChange={(el)=>{   //Text Box für den Filter
            console.log(el.target.value);
            filterPeople(el.target.value);
        }}/>
        </div>
        


        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 p-8 pt-20'>
            {filteredPeople.map(person => {
                return <Card name={person.name} imageUrl={person.avatar} title={person.jobtitle}/>
            })}
        </div>
    </div>
  )
}
