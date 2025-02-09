type HeadingProps = {
    title: string;
    description?: string;
    className?: string;
}

const Heading: React.FC<HeadingProps> = ({title, className, description}) => {
    return (
        <div className='max-w-6xl mx-auto px-4'>
            <h2 className={className}>
                {title}
            </h2>
            {description && (
                <p className={'text-base md:text-xl mb-6 md:mb-8 font-light'}>
                    {description}
                </p>
            )}
        </div>
    );
}

export default Heading;