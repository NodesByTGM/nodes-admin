// import { Button } from "."
import { InstagramIcon, LinkedInIcon, LocationIcon, TwitterIcon } from "../assets/svg"
import { Title } from "./Typography"

interface TalentReviewCardProps {
    skills?: string[],
    name?: string,
    email?: string,
    location?: string,
    preview?: string,
    linkedIn?: string,
    instagram?: string,
    twitter?: string,
    showDetails?: boolean
}


function TalentReviewCard({
    name = 'Jane Doe',
    email = 'janedoe@gmail.com',
    skills = ['Enter skill'],
    location = 'Enter location',
    preview = '',
    linkedIn = '',
    instagram = '',
    twitter = '',
    showDetails = true }: TalentReviewCardProps) {
    return (
        <div className="z-20 flex flex-col justify-center mt-32 items-center">
            <div className="z-20 bg-white p-10 mb-10 rounded-[5px] lg:min-w-[464px]">

                <div className="flex flex-col gap-5 justify-center items-center">
                    <img alt=""
                        src={preview ? preview : "/img/profile-circle.svg"}
                        className="rounded-full w-[96px] h-[96px] object-cover" />
                    <Title className="!text-2xl">{name}</Title>
                    {/* <p><span className="text-tooltip">{name}</span> is available for work</p> */}
                    <p>{email}</p>
                </div>

                {showDetails ? (
                    <div>
                        <hr className="border-grey-dark my-8" />
                        <div className="">
                            <p className="uppercase text-tooltip">Skills</p>
                            <div className="my-5">{skills.join(", ") || 'Add your skills'}</div>
                        </div>
                        <hr className="border-grey-dark my-8" />

                        <div className="">
                            <p className="uppercase text-tooltip">location</p>
                            <div className="my-5 flex gap-2 items-center">
                                <span><LocationIcon /></span>
                                <span>{location || 'Enter a location'}</span>
                            </div>
                        </div>
                        <hr className="border-grey-dark my-8" />

                        <div className="">
                            <p className="uppercase text-tooltip">SOCIAL MEDIA</p>
                            <div className="my-5 flex items-center gap-4">
                                {linkedIn ? (
                                    <a href={linkedIn} target="_blank" rel="noopener noreferrer">
                                        <LinkedInIcon />
                                    </a>
                                ) : null}
                                {instagram ? (
                                    <a href={instagram} target="_blank" rel="noopener noreferrer">
                                        <InstagramIcon />
                                    </a>
                                ) : null}
                                {twitter ? (
                                    <a href={twitter} target="_blank" rel="noopener noreferrer">
                                        <TwitterIcon />
                                    </a>
                                ) : null}
                                {!twitter && !instagram && !linkedIn ? (
                                    <p>Put in your socials (optional)</p>
                                ) : null}

                            </div>
                        </div>
                    </div>
                ): null}

            </div>
        </div >
    )
}

export default TalentReviewCard