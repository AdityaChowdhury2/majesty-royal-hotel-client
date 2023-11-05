import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Pagination = ({ pages, setCurrentPage, currentPage }) => {
	console.log(currentPage);
	return (
		<>
			<ul className="inline-flex gap-4 text-sm">
				{pages.map((page, idx) => (
					<li key={idx}>
						<button
							onClick={() => setCurrentPage(idx)}
							className={`flex items-center justify-center px-3 h-8 leading-tight  border  hover:bg-gray-100 hover:text-gray-700 ${
								currentPage === idx
									? 'bg-[#BB9773] text-white border-[#C19B76]'
									: 'bg-white text-gray-500 border-gray-300 '
							}`}
						>
							{page + 1}
						</button>
					</li>
				))}
			</ul>
		</>
	);
};

Pagination.propTypes = {
	pages: PropTypes.array,
	setCurrentPage: PropTypes.func,
	currentPage: PropTypes.number,
};

export default Pagination;
