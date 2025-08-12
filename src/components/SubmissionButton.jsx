function SubmissionButton({ children, isActive, onClick }) {
  return (
    <button
      className={`w-full py-2 rounded-md transition ${
        isActive
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "bg-gray-400 text-gray-200 cursor-not-allowed"
      }`}
      onClick={() => onClick()}
      disabled={!isActive}
    >
      {children}
    </button>
  );
}

export default SubmissionButton;
