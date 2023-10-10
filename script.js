let loco = () => {
    gsap.registerPlugin(ScrollTrigger)
  
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector('body'),
      smooth: true,
    })
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on('scroll', ScrollTrigger.update)
  
    // tell ScrollTrigger to use these proxy methods for the "body" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy('body', {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        }
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector('body').style.transform
        ? 'transform'
        : 'fixed',
    })
  
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener('refresh', () => locoScroll.update())
  
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh()
  }

// loco()

let menu = document.querySelector('#menu')
let bars = document.querySelector('#bars')
let x = document.querySelector('#x')

// ----------------navigation--------------------

bars.addEventListener('click', ()=>{
    menu.style.transform = 'translateX(0)'
    x.classList.toggle('hidden')
    bars.classList.toggle('hidden')
})

x.addEventListener('click', ()=>{
    menu.style.transform = 'translateX(-100%)'
    x.classList.toggle('hidden')
    bars.classList.toggle('hidden')
})

// --------------------picture text------------------------

let pictureText = ()=>{


document.querySelector('#pic1').addEventListener('mouseenter',()=>{
    document.querySelector('#pict1').style.display = 'block'
})

document.querySelector('#pic1').addEventListener('mouseleave',()=>{
    document.querySelector('#pict1').style.display = 'none'
})



document.querySelector('#pic2').addEventListener('mouseenter',()=>{
    document.querySelector('#pict2').style.display = 'block'
})

document.querySelector('#pic2').addEventListener('mouseleave',()=>{
    document.querySelector('#pict2').style.display = 'none'
})



document.querySelector('#pic3').addEventListener('mouseenter',()=>{
    document.querySelector('#pict3').style.display = 'block'
})

document.querySelector('#pic3').addEventListener('mouseleave',()=>{
    document.querySelector('#pict3').style.display = 'none'
})



document.querySelector('#pic4').addEventListener('mouseenter',()=>{
    document.querySelector('#pict4').style.display = 'block'
})

document.querySelector('#pic4').addEventListener('mouseleave',()=>{
    document.querySelector('#pict4').style.display = 'none'
})



document.querySelector('#pic5').addEventListener('mouseenter',()=>{
    document.querySelector('#pict5').style.display = 'block'
})

document.querySelector('#pic5').addEventListener('mouseleave',()=>{
    document.querySelector('#pict5').style.display = 'none'
})



document.querySelector('#pic6').addEventListener('mouseenter',()=>{
    document.querySelector('#pict6').style.display = 'block'
})

document.querySelector('#pic6').addEventListener('mouseleave',()=>{
    document.querySelector('#pict6').style.display = 'none'
})



document.querySelector('#pic7').addEventListener('mouseenter',()=>{
    document.querySelector('#pict7').style.display = 'block'
})

document.querySelector('#pic7').addEventListener('mouseleave',()=>{
    document.querySelector('#pict7').style.display = 'none'
})



document.querySelector('#pic8').addEventListener('mouseenter',()=>{
    document.querySelector('#pict8').style.display = 'block'
})

document.querySelector('#pic8').addEventListener('mouseleave',()=>{
    document.querySelector('#pict8').style.display = 'none'
})



document.querySelector('#pic9').addEventListener('mouseenter',()=>{
    document.querySelector('#pict9').style.display = 'block'
})

document.querySelector('#pic9').addEventListener('mouseleave',()=>{
    document.querySelector('#pict9').style.display = 'none'
})

}

pictureText()
// -----------------------Animation--------------------------

let Animation = ()=>{


gsap.from('#page2 h1, #page2 p',{
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:'#page2 h1, #page2 p',
        scroller:'body',
        start:'top 40%',
        end:'bottom 100%',
    }
})


gsap.from('#pic1, #pic2',{
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:'#pic1, #pic2',
        scroller:'body',
        start:'top 30%',
    }
})

gsap.from('#pic3, #pic4',{
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:" #pic3, #pic4",
        scroller: 'body'
    }
})

gsap.from('#pic5, #pic6',{
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:" #pic5, #pic6",
        scroller: 'body'
    }
})

gsap.from('#pic7, #pic8',{
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:" #pic7, #pic8",
        scroller: 'body'
    }
})

gsap.from('#pic9',{
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:" #pic9",
        scroller: 'body'
    }
})

gsap.from('#page4 h1, #page4 p',{
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:'#page4 h1, #page4 p',
        scroller:'body',
        start:'top 30%',
        end:'bottom 100%',
    }
})


gsap.from('#page5',{
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:'#page5',
        scroller:'body',
        start:'top 60%',
    }
})

}

Animation()