import React from 'react'
import Illustration from '../../assets/images/background/bg-food.jpg'
import Container from '../elements/Container'
import Navigation from './Navigation'
import ProductImage from '../../assets/images/banner/burger-hero-top.png'
import Button from '../elements/Button'
export default function HeroTop() {
  return (
    <>
    <header className='bg-primary w-full'>
        <div className='bg-repeat w-full h-full pb-40' style={{ backgroundImage : `url(${Illustration})`}}>
            <Container>
                <Navigation/>
                <section className='relative mt-28 w-full'>
                <img className='absolute z-0 -top-64 right-0 w-6/12' src={ProductImage} alt="Illustration de produit" />

                    <div className='relative z-10 text-secondary uppercase'>
                        <h1 className='mb-4 font-semibold'>C'est le moment de goûter au bon goût des hamburgers.</h1>
                        <h2 className='font-secondary mb-10'>
                            <span className='text-8xl block'>Burger</span>
                            <span className='text-6xl'>House</span>
                            <span className='text-2xl'> Click&collect</span>
                        </h2>
                        <Button name="Crée mon compte" theme="big" color="secondary"/>
                    </div>
                </section>
            </Container>
        </div>
    </header>
    </>
  )
}
