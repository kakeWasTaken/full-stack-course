const Header = (course) => {
    return (
        <>
            <h1>{course.name}</h1>
        </>
    )
}

const Part = (exercise) => {
    return (
        <>
            <p>
                {exercise.name} {exercise.num}
            </p>
        </>
    )
}

const Content = (exercise) => {
    return (
        <>
            <Part name={exercise.name1} num={exercise.num1} />
            <Part name={exercise.name2} num={exercise.num2} />
            <Part name={exercise.name3} num={exercise.num3} />
        </>
    )
}

const Total = (num) => {
    return (
        <>
            <p>Number of exercises {num.a + num.b + num.c}</p>
        </>
    )
}

const App = () => {
    // const-definitions
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    return (
        <>
            <Header name={course} />
            <Content name1={part1}
                     num1={exercises1}
                     name2={part2}
                     num2={exercises2}
                     name3={part3}
                     num3={exercises3}/>
            <Total a={exercises1}
                   b={exercises2}
                   c={exercises3} />
        </>
    )
}

export default App