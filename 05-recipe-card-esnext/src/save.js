/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps } from '@wordpress/block-editor';

const Save = ( props ) => {
	const {
		attributes: { title, mediaURL, ingredients, instructions, notes },
	} = props;

	const blockProps = useBlockProps.save();
	return (
		<div {...blockProps}>
			<RichText.Content tagName="h1" className="recipe-title" value={title} />
			<hr className="divider" />
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
			<hr className="divider" />
			<div className="container">
				<div className="col-40">
					<div className="row-ingredients">
						<h3>{__('Ingredients', 'gutenberg-examples')}</h3>
						<RichText.Content
							tagName="ul"
							className="ingredients"
							value={ingredients}
						/>
					</div>
					<div className="row-notes">
						<h3>{__('Notes', 'gutenberg-examples')}</h3>
						<RichText.Content
							tagName="ul"
							className="notes"
							value={notes}
						/>
					</div>
				</div>
				<div className="col-60">
					<div className="recipe-image">
						{mediaURL && (
							<img
								className="recipe-img"
								src={mediaURL}
								alt={__('Recipe Image', 'gutenberg-examples')}
							/>
						)}
					</div>
					<div className="instructions">
						<h3>{__('Instructions', 'gutenberg-examples')}</h3>
						<RichText.Content
							tagName="div"
							className="steps"
							value={instructions}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Save;
