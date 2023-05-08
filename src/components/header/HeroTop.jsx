import React from 'react'
import Illustration from '../../assets/images/background/bg-food.jpg'
import Container from '../elements/Container'
import Navigation from './Navigation'
import ProductImage from '../../assets/images/banner/burger-hero-top.png'
export default function HeroTop() {
  return (
    <>
    <header className='bg-primary w-full h-screen'>
        <div className='bg-repeat w-full h-full' style={{ backgroundImage : `url(${Illustration})`}}>
            <Container>
                <Navigation/>
                <section className='flex items-center justify-between'>
                    <div className='w-full'>
                        <h1>C'est le moment de goûter au bon goût des hamburgers.</h1>
                    </div>
                    <div className='w-full'>
                        <img src={ProductImage} alt="Illustration de produit" />
                    </div>
                </section>
            </Container>
        </div>
    </header>
    </>
  )
}
