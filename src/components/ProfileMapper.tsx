import type { Info } from "../models/InfoDTO";
import BodyText from "./BodyText";

type Props<T extends Info> = {
	data: T[];
	join?: boolean;
};
const ProfileMapper = <T extends Info>({ data, join = false }: Props<T>) => {
	if (join) {
		return <BodyText>{data.map((a) => a.descricao).join("; ")}</BodyText>;
	}
	return (
		<>
			{data.map((obj) => (
				<BodyText key={obj.id}>{obj.descricao}</BodyText>
			))}
		</>
	);
};

export default ProfileMapper;
