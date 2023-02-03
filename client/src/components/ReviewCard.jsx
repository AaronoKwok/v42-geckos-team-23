import React from 'react'
import defaultUserProfile from '../assets/goPup_dog.png'

const ReviewCard = ({ user, text, time_created }) => {
    const date = time_created.slice(0, 10)
    user.image_url === null && (user.image_url = defaultUserProfile)

    return (
        <section className='mb-4 font-nunito sm:w-1/3 sm:pr-6'>
            <div className='flex items-center'>
                <img className='w-12 h-12 rounded-full'
                    src={user.image_url}
                    alt={`${user.name}'s profile picture on Yelp`} />
                <div className='ml-5'>
                    <h1 className='text-3xl font-semibold'>{user.name}</h1>
                    <p>{date}</p>
                </div>
            </div>
            <p className='tracking-widest mt-3'>{text}</p>
        </section>
    )
}

export default ReviewCard