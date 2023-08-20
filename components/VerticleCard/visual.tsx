import classNames from "classnames";
import { useFeatureStore } from "./store";
import { motion } from "framer-motion";

type Props = {
    id: string;
};

type VisualProps = {
    children: React.ReactNode;
} & Props;

const Visual = ({ children, id }: VisualProps) => {
    return (
        <div
            className={classNames(
                "pointer-events-none fixed inset-0 flex items-center justify-center opacity-0",
                `visual-${id}`
            )}
        >
            <div className="max-w-6xl px-4">{children}</div>
        </div>
    );
};

export const MusicVisual = ({ id }: Props) => {
    // const fullscreenFeature = useFeatureStore((store) => store.fullscreenFeature);
    // const isFullscreen = fullscreenFeature === id;

    return (
        <Visual id={id}>
            {/* <img src="/window-spotify.webp" /> */}
            
                <motion.div
                    layoutId="spotify-logo"
                  
                >
                    <h1>DDDDDDD</h1>
                </motion.div>
            
        </Visual>
    );
};



export const TodoVisual = ({ id }: Props) => {
    return (
        <Visual id={id}>
            {/* <img src="/window-spotify.webp" /> */}

            <motion.div
                layoutId="spotify-logo"

            >
                <h1>DDDDDDD</h1>
            </motion.div>

        </Visual>
    );
};


export const OtherVisual = ({ id }: Props) => {
    return (
        <Visual id={id}>
          {/* <h1>HELLO</h1> */}
        </Visual>
    );
};
