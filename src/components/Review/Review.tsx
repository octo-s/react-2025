import type {Review as ReviewType} from "../../types/restaurant";

type ReviewProps = {
    review: ReviewType;
}

export const Review = ({review}:ReviewProps) => {
    const  {user, rating, text} = review;

    return (
        <>
            <h4>{user} - {rating} stars</h4>
            <>{text}</>
        </>
    );
};

