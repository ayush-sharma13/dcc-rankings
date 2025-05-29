import data from '../data/testBatting.json';
import RankingCard from './RankingCard';

export default function TestBatting() {
  return (
    <div>
      {data.map((player, index) => (
        <RankingCard
          key={index}
          rank={index + 1}
          name={player.name}
          rating={player.rating}
        />
      ))}
    </div>
  );
}
