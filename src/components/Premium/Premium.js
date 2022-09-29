import useMobile from '../../hooks/UseMobile';

const Premium = () => {
  const isMobile = useMobile();
  return (
    <div className="container">
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScHMgSygb9gBvoaQj7LKhnEXY8c0wBzE5-Tp5Xt__eOFyJQwA/viewform?embedded=true" width={isMobile ? "320" : "640"} height="2776" frameborder="0" marginheight="0" marginwidth="0" className="premium">Loading…</iframe>
    </div>
  )
}

export default Premium;
