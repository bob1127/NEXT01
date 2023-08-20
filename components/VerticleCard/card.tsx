import classNames from "classnames";
import { useFeatureStore } from "./store";
import { motion } from "framer-motion";

type FeatureCardProps = {
    gradient: string;
    children: React.ReactNode;
} & CardProps;

type CardProps = {
    id: string;
};

const FeatureCard = ({ gradient, children, id }: FeatureCardProps) => {
    const inViewFeature = useFeatureStore((state) => state.inViewFeature);
    const setFullscreenFeature = useFeatureStore(
        (state) => state.setFullscreenFeature
    );

    return (
        <div
            className={classNames(
                "absolute inset-0 h-full w-full rounded-2xl transition-opacity",
                inViewFeature === id
                    ? "active-card opacity-100"
                    : "pointer-events-none opacity-0"
            )}
        >
            <div
                className={classNames(
                    "gradient absolute inset-0 origin-bottom-left rounded-2xl bg-gradient-to-br",
                    gradient
                )}
            />
            {children}
            <button
                onClick={() => setFullscreenFeature(id)}
                className="show-me-btn absolute bottom-6 right-6 rounded-xl bg-black px-4 py-2 text-white shadow-lg"
            >
                Show me
            </button>
        </div>
    );
};

export const Todo = ({ id }: CardProps) => {
    return (
        <FeatureCard id={id} gradient="from-[#f7f0ff] to-[#a78afe]">
            <p>jjjjj</p>
            <motion.div
                layoutId="spotify-logo"

            >
                <h1>DDDDDDD</h1>
            </motion.div>
        </FeatureCard>
    );
};

export const Colors = ({ id }: CardProps) => {
    return (
        <FeatureCard id={id} gradient="from-[#f5fbff] to-[#addeff]">
            <span />
        </FeatureCard>
    );
};

export const Availability = ({ id }: CardProps) => {
    return (
        <FeatureCard id={id} gradient="from-[#f5fff7] to-[#adf8ff]">
            <span />
         
        </FeatureCard>
    );
};

export const Music = ({ id }: CardProps) => {
    const fullscreenFeature = useFeatureStore((store) => store.fullscreenFeature);
    const isFullscreen = fullscreenFeature === id;
    return (
        <FeatureCard id={id} gradient="from-[#f5fff7] to-[#adf8ff]">
           
            <img
                className={classNames(
                    "absolute left-[10%] bottom-[5%] w-[80%] rounded-xl shadow-lg transition-transform",
                    isFullscreen ? "scale-0" : "scale-100"
                )}
                src="https://images.pexels.com/photos/17926548/pexels-photo-17926548.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            />

            <span />

        </FeatureCard>
    );
};

export const SchedulingLinks = ({ id }: CardProps) => {
    return (
        <FeatureCard id={id} gradient="from-[#fff7f5] to-[#ffd8ad]">
            <span />
        </FeatureCard>
    );
};

export const Team = ({ id }: CardProps) => {
    return (
        <FeatureCard id={id} gradient="from-[#fef5ff] to-[#ffade1]">
            <span />
        </FeatureCard>
    );
};
