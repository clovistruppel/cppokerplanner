using CPokerPlanner.Models;
using CPokerPlanner.Repository;
using Microsoft.AspNetCore.Mvc;

namespace CPokerPlanner.Controllers;

[ApiController]
[Route("[controller]")]
public class PlayerController : ControllerBase
{
    private readonly PlayerRepository _repository;

    public PlayerController()
    {
        _repository = PlayerRepository.GetInstance();
        
    }

    [HttpGet]
    public IEnumerable<Player>? Get()
    {
        var sum = 0m;
        var valid = 0;
        _repository.PlayerList.ForEach(player =>
        {
            if (player.Vote == "?" || player.Vote.Equals(string.Empty)) 
                return;
            sum += int.Parse(player.Vote);
            valid++;
        });
        
        var tempList = new List<Player>();
        tempList.AddRange(_repository.PlayerList);
        if (sum <= 0) 
            return tempList;
        
        var average = new Player
        {
            Name = "Average",
            Vote = ""+Math.Round(sum/valid, 1)
        };
        tempList.Add(average);
        return tempList;
    }

    [HttpPost]
    public JsonResult Post(Player player)
    {
        var exists = _repository?.PlayerList.Find(player1 => player1.Name == player.Name);
        if (exists == null)
            _repository?.PlayerList?.Add(player);
        else
            exists.Vote = player.Vote;

        return new JsonResult("Added Successfully");
    }
    
    [HttpGet]
    [Route("update")]
    public IEnumerable<Player> Update()
    {
        _repository.PlayerList = new List<Player>();
        return _repository.PlayerList;
    }
    [HttpGet("/average")]
    public decimal Average()
    {
        var sum = _repository.PlayerList.Sum(player => decimal.Parse(player.Vote));
        var average = sum/_repository.PlayerList.Count;
        return average;
    }
}