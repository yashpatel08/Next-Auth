'use client'
import { Button, Card, Input, List, ListItem } from '@material-tailwind/react'
import { useState } from 'react'

const SpecificUser = () => {
    const [userId, setUserId] = useState('')
    const [userData, setUserData] = useState(null)

    const fetchData = async () => {
        const response = await fetch(`/api/users/${userId}`);
        if (response.ok) {
            const res = await response.json()
            setUserData(res.user);
        } else {
            console.log('Error Fetching data');
            setUserData(null);
        }
    }
    return (
        <div>
            <div className="flex">
                <div className="w-72">
                    <Input  type='text' label='Enter User ID' value={userId} onChange={e => setUserId(e.target.value)} />

                </div>
                    <Button className='ml-4' onClick={fetchData()}>Fetch User</Button>
            
            </div>
            {userData ? (
                    userData.map((d) => (
                        <>
                            <Card className='w-94 mt-5'>
                                <List>
                                    <ListItem>ID: {d.id}</ListItem>
                                    <ListItem>Name: {d.name}</ListItem>
                                    <ListItem>Age: {d.age}</ListItem>
                                    <ListItem>Email: {d.email}</ListItem>
                                    <ListItem>Password: {d.password}</ListItem>

                                </List>
                            </Card>
                        </>
                    ))
                ): (
                    <p className='mt-2'>Search for Specific User</p>
                )}
        </div>
    )
}

export default SpecificUser