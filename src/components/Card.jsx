import { useSpring, animated } from "react-spring";
import iconDado from "../assets/icon-dice.svg";
import patternDivMob from "../assets/pattern-divider-mobile.svg";
import useFetch from "../hooks/useFetch";

const Card = () => {
  const {catchRandomAdvice, text} = useFetch()
  const rotateEffect = useSpring({
    from: {rotateZ :  0  },
    to: {rotateZ:  180 }, 
  })
  const handleClick = () =>{
    catchRandomAdvice()
  }

  return ( 
    <section className="mt-10 m-auto w-11/12 bg-[#323A49] flex justify-center flex-col items-center
    sm:w-[45%] sm:px-2 rounded-md">
        <h3 className=" text-[#52FFA8] font-bold m-5">ADVICE #{text.id}</h3>
        <h2 className=" text-[#CEE3E9] font-bold m-5 text-center text-[28px]">
          {text.advice}
        </h2>
        <img src={patternDivMob} alt="" className="m-5 mx-0 w-4/5 sm:w-3/5 " />
        <button className="bg-[#52FFA8] p-6 rounded-full relative top-10"
        onClick={handleClick}>
            <animated.div style= {rotateEffect}><img src={iconDado} alt="" width={40}/></animated.div>
        </button>
    </section>
);
};

export default Card;
