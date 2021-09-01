import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function Dashboard() {
	const history = useHistory();
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	React.useEffect(() => {
		if (!isAuthenticated) {
			history.push('/login');
		}
	}, [isAuthenticated, history]);

	return <div>dashboard</div>;
}
