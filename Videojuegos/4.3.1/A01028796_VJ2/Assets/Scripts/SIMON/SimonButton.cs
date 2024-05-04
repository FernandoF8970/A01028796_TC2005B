/*
Highlight the button and make it play a sound 

Fernando Adrián Fuentes Martínez - A01028796
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class SImonButton : MonoBehaviour
{


    [SerializeField] float delay;
    Color originalColor;

    AudioSource audioSource;
    // Start is called before the first frame update
    public void Init(int index)
    {
        originalColor = GetComponent<Image>().color;
        audioSource = GetComponent<AudioSource>();
        audioSource.clip = Resources.Load<AudioClip>($"Audio/{index}");
    }


    public void Highlight()
    {
        audioSource.Play();
        // Change color
        StartCoroutine(Changecolor());
    }

    IEnumerator Changecolor()
    {
        GetComponent<Image>().color = Color.white;
        // Wait a moment before restarting the original color
        yield return new WaitForSeconds(delay);
        GetComponent<Image>().color = originalColor;
    }

    public void ResetButton()
    {
        GetComponent<Image>().color = originalColor; 
    }


}


