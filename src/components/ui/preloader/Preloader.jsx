import {ThreeCircles} from "react-loader-spinner";
import styles from './Preloader.module.css';

const Preloader = () => {
	return (
		<>
			<div className={styles['preloader-wrapper']}>
				<ThreeCircles
					height="100"
					width="100"
					color="var(--accent-color)"
					wrapperStyle={{}}
					wrapperClass=""
					visible={true}
					ariaLabel="three-circles-rotating"
					outerCircleColor=""
					innerCircleColor=""
					middleCircleColor=""
				/>
			</div>
		</>
	);
};

export default Preloader;