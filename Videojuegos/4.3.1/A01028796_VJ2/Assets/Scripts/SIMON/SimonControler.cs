/*
Manage the flow of tge simon game
keep track of the turn, and the list of buttons to press

Fernando Adrián Fuentes Martínez - A01028796
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class SimonControler : MonoBehaviour
{

    [SerializeField] List<SImonButton>buttons;
    [SerializeField] List<int>sequence;
    [SerializeField] float delay;
    [SerializeField] int level;
    [SerializeField] bool playerTurn = false;

    [SerializeField] int counter = 0;
    [SerializeField] int numButtons;
    [SerializeField] GameObject buttonPrefab;
    [SerializeField] Transform buttonParent;
    [SerializeField] TMP_Text scoreText;
    [SerializeField] GameObject LoseScreen;
    [SerializeField] TMP_Text highscoreText;
    [SerializeField] List<Sprite> monday;
    [SerializeField] Image gif;

    int highScore = 0;



    // Start is called before the first frame update
    void Start()
    {
        //configure the buttons to be used in the game
        PrepareButtons();
        UpdateScoreDisplay();
        LoseScreen.SetActive(false);
        UpdateHighscore();
    }

    IEnumerator Gif()
    {

        while (true){

            foreach (Sprite image in monday)
            {
                gif.sprite = image; 
                yield return new WaitForSeconds(0.2f); 
            }
        }
    }

    private void ShowLoseScreen()
    {
        LoseScreen.SetActive(true);
        StartCoroutine(Gif());

        if (level > highScore) {
            highScore = level;
            UpdateHighscore();
        }
    }

     void UpdateScoreDisplay()
    {
        scoreText.text = $"Puntuacion: {level}";
    }

    void UpdateHighscore()
    {
        highscoreText.text = $"Mejor Puntuacion: {highScore}";
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    void PrepareButtons()
    {

        for (int i = buttons.Count - 1; i >= 0; i--)
        {
            Destroy(buttons[i].gameObject);
        }

        buttons.Clear();

        for (int i = 0; i < numButtons; i++) {
            int index = i;
            //Create copies of the buttons as children of the panel
            GameObject newButton = Instantiate(buttonPrefab, buttonParent);
            newButton.GetComponent<Image>().color = Color.HSVToRGB((float)index/numButtons, 1, 1);

            // Set the default color for each button
            newButton.GetComponent<SImonButton>().Init(index);
            buttons.Add(newButton.GetComponent <SImonButton>());
            buttons[i].gameObject.GetComponent<Button>().onClick.AddListener(() => ButtonPressed(index));
        }
        // Start the game by adding the first button
        AddToSequence();
    }

    public void ButtonPressed(int index) {
        if (playerTurn) {
            if (index == sequence[counter++]) {
                buttons[index].Highlight();
                if (counter == sequence.Count) {
                    playerTurn = false;
                    level++;
                    counter = 0;
                    AddToSequence();
                    UpdateScoreDisplay();

                    if (level > highScore) {
                        highScore = level;
                        UpdateHighscore();
                    }
                }
            } else {
                Debug.Log("Game Over!");
                ShowLoseScreen();
            }
        }
    }

    void AddToSequence()
    {
        //Add a new button to the sequence 
        sequence.Add(Random.Range(0, buttons.Count));
        StartCoroutine(PlaySequence());
    }

    IEnumerator PlaySequence()
    {
        yield return new WaitForSeconds(delay);
        foreach (int index in sequence) {
            buttons[index].Highlight();
            yield return new WaitForSeconds(delay);
        }
        playerTurn = true;
    }

    public void RestartGame()
    {
        StopAllCoroutines();

        foreach (var button in buttons)
        {
            button.ResetButton(); 
        }

        LoseScreen.SetActive(false);
        sequence.Clear();
        counter = 0;
        level = 0; 
        playerTurn = false;
        UpdateScoreDisplay();

        PrepareButtons();
        AddToSequence();
    }


    IEnumerator WaitAndStartSequence()
    {
        yield return new WaitForSeconds(delay); 
        AddToSequence();
    }


}
