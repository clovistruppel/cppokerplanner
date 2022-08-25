using CPokerPlanner.Models;

namespace CPokerPlanner.Repository;

public class PlayerRepository
{
    private static readonly PlayerRepository Instance = new(new List<Player>());

    private PlayerRepository(List<Player> playerList)
    {
        PlayerList = playerList;
    }
    public List<Player> PlayerList { get; set; }
    public static PlayerRepository GetInstance()
    {
        return Instance;
    }
    

}