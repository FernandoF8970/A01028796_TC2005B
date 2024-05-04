/* 
Game manager for the pong demo
Fernando Adrián Fuentes Martínez - A01028796
10/04/2024
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
//necesary to display text in the UI
using TMPro;

public class Manager : MonoBehaviour
{
    [SerializeField] GameObject ball;
    [SerializeField] GameObject ballPrefab; //objeto en la escena de unity (DOT) 
    [SerializeField] float speed;

    [SerializeField] TMP_Text scoreLeft;
    [SerializeField] TMP_Text scoreRight;

    public int pointsLeft;
    public int pointsRight;

    // Start is called before the first frame update
    void Start()
    {
        InitGame();  
    }

    // Update is called once per frame
    void Update()
    {
        // reset a ball if there is one in the game
        if (Input.GetKeyDown(KeyCode.R))
        {
            Reset();
        }

        /*
        if (Input.GetKeyDown(KeyCode.R))
        {
            Destroy(ball);
            InitGame();
        }
        */
    }

    public void Reset()
    {
        if (ball != null)
        {
            Destroy(ball);
            InitGame();  
        }
    }

    // Start a new game
    void InitGame()
    {
        StartCoroutine(ServeBall());
    }

    //
    IEnumerator ServeBall()
    {
        yield return new WaitForSeconds(1.0f); //2.0f hace que sea float 
        ball = Instantiate(ballPrefab);
        ball.GetComponent<Rigidbody2D>().velocity = 
        Random.insideUnitCircle.normalized * speed;
    }

    // Increase the score of the specified player
    public void Score(string side)
    {
        if (side == "left") {
            pointsLeft++;
            scoreLeft.text = pointsLeft.ToString();
            InitGame();
        } else if (side == "right") {
            pointsRight++;
            scoreRight.text = pointsRight.ToString();
            InitGame();
        }
    }
}
