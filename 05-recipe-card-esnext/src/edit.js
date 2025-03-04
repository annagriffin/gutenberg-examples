/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, MediaUpload, useBlockProps } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

const Edit = ( props ) => {
	const {
		attributes: { title, mediaID, mediaURL, ingredients, instructions, notes },
		setAttributes,
	} = props;

	const blockProps = useBlockProps();

	const onChangeTitle = ( value ) => {
		setAttributes( { title: value } );
	};

	const onSelectImage = ( media ) => {
		setAttributes( {
			mediaURL: media.url,
			mediaID: media.id,
		} );
	};
	const onChangeIngredients = ( value ) => {
		console.log(getFoodNutrition(value));
		setAttributes( { ingredients: value } );
	};

	const onChangeInstructions = ( value ) => {
		setAttributes( { instructions: value } );
	};

	const onChangeNotes = ( value ) => {
		setAttributes( { notes: value } );
	};

	function getFoodNutrition(value) {
		const initials = {
						calories: 0,
						carbs: 0,
						fat: 0,
						}
   const caloriesData = {
       egg: {calories: 105, carbs: 42, fat:1},
       milk: {calories: 52, carbs: 33, fat:4},
       butter: {calories: 237, carbs: 2, fat:21},
       flour: {calories: 34, carbs: 83, fat:6},
       cream: {calories: 223, carbs: 3, fat:44}
	}

   // Convert list string value to array
   value = value.replaceAll('<li>','').split('</li>');

   // Loop over the caloriesData keys
   let ingredientTotals = value
				// filter value (entries) that are in the keys
				.filter(key =>  Object.keys(caloriesData).filter(ingredient => ingredient === key).length)
				// Calculate sum of calories, carbs, fat
				.reduce((res, key) => ({
						calories: res.calories + caloriesData[key].calories,
						carbs: res.carbs + caloriesData[key].carbs,
						fat: res.fat + caloriesData[key].fat
				}), initials);

   return `Calories: ${ingredientTotals.calories}kcal - Carbs: ${ingredientTotals.carbs}gr - fat: ${ingredientTotals.fat}gr`;
	};


	return (
		<div {...blockProps}>
			<RichText
				tagName="h1"
				placeholder={__(
					'Write Recipe title…',
					'gutenberg-examples'
				)}
				value={title}
				onChange={onChangeTitle}
			/>
			<hr />
			<div className="container">
				<div className="col-40">
					<div className="row-ingredients">
						<h3 className="sub-header">{__('Ingredients', 'gutenberg-examples')}</h3>
						<RichText
							tagName="ul"
							multiline="li"
							placeholder={__(
								'Write a list of ingredients…',
								'gutenberg-examples'
							)}
							value={ingredients}
							onChange={onChangeIngredients}
							className="ingredients"
						/>
					</div>
					<div className="row-notes">
						<h3 className="sub-header">{__('Notes', 'gutenberg-examples')}</h3>
						<RichText
							tagName="div"
							multiline="p"
							className="notes"
							placeholder={__(
								'Write your notes here...',
								'gutenberg-examples'
							)}
							value={notes}
							onChange={onChangeNotes}
						/>
					</div>
				</div>
				<div className="col-60">
					<div className="recipe-image">
						<MediaUpload
							onSelect={onSelectImage}
							allowedTypes="image"
							value={mediaID}
							render={({ open }) => (
								<Button
									className={
										mediaID ? 'image-button' : 'button button-large'
									}
									onClick={open}
								>
									{!mediaID ? (
										__('Upload Image', 'gutenberg-examples')
									) : (
										<img
											src={mediaURL}
											alt={__(
												'Upload Recipe Image',
												'gutenberg-examples'
											)}
										/>
									)}
								</Button>
							)}
						/>
					</div>
					<div className="instructions">
						<h3 className="sub-header">{__('Instructions', 'gutenberg-examples')}</h3>
						<RichText
							tagName="div"
							multiline="p"
							className="steps"
							placeholder={__(
								'Write the instructions…',
								'gutenberg-examples'
							)}
							value={instructions}
							onChange={onChangeInstructions}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Edit;
