const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://linkedin.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linked-in-link" src="../assets/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/Jaron-S"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github-link" src="../assets/github.png" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
