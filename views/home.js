export default ({ markup, state }) => {
	return `
    <section id="react-app">${markup}</section>
    <script id="initial-state" type="application/json">${state}</script>
`;
};
