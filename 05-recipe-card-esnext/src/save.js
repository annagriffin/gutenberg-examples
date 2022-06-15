/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps } from '@wordpress/block-editor';

const Save = ( props ) => {
	const {
		attributes: { title, mediaURL, ingredients, instructions },
	} = props;

	const blockProps = useBlockProps.save();
	return (
		<div { ...blockProps }>
			<RichText.Content tagName="h1" value={ title } />

			{ mediaURL && (
				<img
					className="recipe-image"
					src={ mediaURL }
					alt={ __( 'Recipe Image', 'gutenberg-examples' ) }
				/>
			) }

			<h3>{ __( 'Ingredients', 'gutenberg-examples' ) }</h3>
			<RichText.Content
				tagName="ul"
				className="ingredients"
				value={ ingredients }
			/>

			<h3>{ __( 'Instructions', 'gutenberg-examples' ) }</h3>

			<div className="cooking-time-container">
				<div className="time-estimate-continer">
					<div className="time-estimate-title">Prep Time</div>
					<div className="time-estimate">15 mins</div>
				</div>
				<div className="time-estimate-container">
				<div className="time-estimate-title">Cook Time</div>
					<div className="time-estimate">15 mins</div>
				</div>
				<div className="time-estimate-container">
					<div className="time-estimate-title">Total Time</div>
					<div className="time-estimate">30 mins</div>
				</div>
			</div>

			<RichText.Content
				tagName="div"
				className="steps"
				value={ instructions }
			/>
		</div>
	);
};

export default Save;
