import React from 'react';
import { useSelector } from 'react-redux';

export default function Loading() {
	const loading = useSelector((state) => state.loading.loading);
	return loading && <div>loading....</div>;
}
