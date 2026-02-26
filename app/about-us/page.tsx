import AboutUs from "@/components/about/about-section";
import WhatWeDo from "@/components/about/what-we-do";
import CapitalProtectionStats from "@/components/home/in-numbers";
import MissionVisionSection from "@/components/home/misson-vision";
import LeadershipTeam from "@/components/home/leadership-team";
import TowerResearchCard from "@/components/shared/tower-research-card";

const About = () => {
	return (
		<div>
			<AboutUs />
			<MissionVisionSection />
			<WhatWeDo />
			<LeadershipTeam />
			<CapitalProtectionStats />
			<TowerResearchCard />
		</div>
	);
};

export default About;
