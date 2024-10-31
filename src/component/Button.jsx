const Button = ({ title, background, color }) => {
    return (
        <>
            <button className={`w-full py-1.5 bg-${background} text-${color} rounded border px-3 text-sm`} type="submit">{title}</button>
        </>
    )
}

export default Button;