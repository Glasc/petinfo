type CardProps = {
  id: number;
  alt?: string;
  title: string;
  description: string;
  src?: string;
};

export const Card = ({
  id,
  alt,
  title,
  description,
  src = "https://placeimg.com/400/225/arch",
}: CardProps) => {
  return (
    <div>
      <div className="card card-compact w-80 bg-base-100 shadow-xl">
        <figure>
          <img src={src} alt={alt} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <a href={`/dogs/${id}/`}>
              <button className="btn btn-primary">Details</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
