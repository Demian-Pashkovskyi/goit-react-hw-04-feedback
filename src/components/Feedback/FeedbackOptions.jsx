import { BtnList, BtnItem, Btn } from "./FeedbackStyled";
import PropTypes from "prop-types";


export const FeedbackOptions = ({ options, onSendFeedback }) => {
  return (
    <BtnList>
			{options.map((option) => {
				return (
					<BtnItem key={option}>
						<Btn onClick={onSendFeedback} type="button" name={option} key={option}>{option.charAt(0).toUpperCase()+option.slice(1)}</Btn>
					</BtnItem>
				);
			})}
		</BtnList>
  )
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onSendFeedback:PropTypes.func.isRequired,
  }