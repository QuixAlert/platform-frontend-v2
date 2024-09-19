type LabelProps = {
    name: string
}

function Label({ name }: LabelProps){
    return (
        <>
            <div className="pt-0 pb-0 pr-3 pl-3 rounded-full bg-slate-600 text-white">
                {name}
            </div>
        </>
    )
}


export default Label;