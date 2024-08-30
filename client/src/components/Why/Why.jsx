import React from 'react'
import Card from './Card';
import benefit1 from '../../assets/benefit1.webp'
import benefit2 from '../../assets/benefit2.jpg'
import benefit3 from '../../assets/benefit3.jpg'
import benefit4 from '../../assets/benefit4.jpeg'
import "./Why.css";

function Why() {
    return (
        <div className='benefits bg-gradient-to-br from-purple-700 to-indigo-900 p-16'>
            <h1 className='font-["Moo_Lah_Lah"] text-center text-7xl text-white mb-8'>Why Adopt?</h1>
            <p className='intro text-purple-300 nuni flex justify-center items-center mb-12'>Adopting a pet is a wonderful and rewarding experience for both the adopter and the pet. Here are some compelling reasons to consider adoption:</p>
            <div className="flex justify-center gap-8 flex-nowrap">
                <Card source={benefit1} className='bg-white'
                    header="Health benefits"
                    para="Pets can improve your physical and mental health. They encourage physical activity, reduce stress, and provide companionship, leading to a happier and healthier lifestyle."/>
                <Card source={benefit2}
                    header="Saving Lives"
                    para="By adopting a pet, you are saving a life. Many animals in shelters are at risk of being euthanized due to overcrowding and limited resources. Adopting gives these animals a second chance at life and a loving home."/>
                <Card source={benefit3}
                    header="Finding a Loving Companion"
                    para="Shelters have a wide variety of pets, each with unique personalities and backgrounds. You are likely to find a pet that perfectly matches your lifestyle and personality."/>
                <Card source={benefit4}
                    header="Cost-Effective"
                    para="Adoption fees are often lower than the cost of purchasing a pet from a breeder or pet store. Additionally, adopted pets are usually spayed/neutered, vaccinated, and microchipped, saving you additional costs."/>
            </div>
        </div>
    )
}

export default Why