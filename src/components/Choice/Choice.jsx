import PropTypes from "prop-types";

export default function Choice({ choices }) {
  return choices.map((choice) => (
    <>
      <h2>{choice}</h2>
      <button
        type="button"
        className="max-w-fit rounded bg-pink-600 px-2 font-semibold text-white hover:bg-pink-400"
      >
        {choice}{" "}
      </button>
    </>
  ));
}

Choice.propTypes = {
  choices: PropTypes.string.isRequired,
};
